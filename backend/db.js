const Database=require('better-sqlite3'); const path=require('path');
const db=new Database(process.env.DB_FILE || path.join(__dirname,'../taskflow.db'));
db.pragma('foreign_keys = ON');
function init(){ db.exec(require('fs').readFileSync(path.join(__dirname,'../schema.sql'),'utf8')); const board=db.prepare('SELECT id FROM boards LIMIT 1').get(); if(!board){ const b=db.prepare('INSERT INTO boards(name) VALUES (?)').run('My Task Board'); const add=db.prepare('INSERT INTO columns(board_id,name,position) VALUES (?,?,?)'); const todo=add.run(b.lastInsertRowid,'To Do',1).lastInsertRowid; const progress=add.run(b.lastInsertRowid,'In Progress',2).lastInsertRowid; const done=add.run(b.lastInsertRowid,'Done',3).lastInsertRowid; const t=db.prepare('INSERT INTO tasks(column_id,title,description,priority) VALUES (?,?,?,?)'); t.run(todo,'Welcome to TaskFlow','Create your first task.','High'); t.run(progress,'Build the board','Connect frontend to the backend.','Medium'); t.run(done,'Read the assignment','Review requirements and tests.','Low'); }}
init();
module.exports={db,init};
