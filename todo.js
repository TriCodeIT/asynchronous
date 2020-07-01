const params = process.argv
const fs = require('fs');

let data = JSON.parse(fs.readFileSync('todo.json', 'utf-8'));

const writeData = (data) => {
    fs.writeFileSync('todo.json', JSON.stringify(data, null, 3), 'utf-8')
}

let msg = `>>> JS TODO <<<
   $ node todo.js <command>
   $ node todo.js list
   $ node todo.js task <task_id>
   $ node todo.js add <task_content>
   $ node todo.js delete <task_id>
   $ node todo.js complete <task_id>
   $ node todo.js uncomplete <task_id>
   $ node todo.js list:outstanding asc|desc
   $ node todo.js list:completed asc|desc
   $ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
   $ node todo.js filter:<tag_name></tag_name>`

let id = Number(params[3] - 1);

switch (params[2]) {
    case 'add':
        let task = params.slice(3).join(' ')
        data.push({ task, complete: false, tags: [] })
        writeData(data)
        console.log(`"${task}" telah ditambahkan`);
        break;

    case 'list':
        console.log('daftar pekerjaan:');
        data.forEach((element, i) => {
            console.log(`${i + 1}.[${element.complete ? 'x' : ' '}] ${element.task}`);
        });
        break;
    case 'task':
        if (data[id]) {
            console.log(`pekerjaan dengan id : ${id + 1} adalah :`);
            console.log(`${id + 1}.[${data[id].complete ? 'x' : ' '}] ${data[id].task}`);
        } else {
            console.log(`data dengan id : ${id + 1} tidak ditemukan`);
        }

        break;
    case 'delete':
        let itemDeleted = data[id];
        if (itemDeleted) {
            data.splice(id, 1);
            writeData(data)
            console.log(`"${itemDeleted.task}' telah dihapus`);
        } else {
            console.log(`data dengan id : ${id + 1} tidak ditemukan`);
        }
        break;
    case 'complete':
        if (data[id]) {
            data[id].complete = true;
            writeData(data)
            console.log(`"${data[id].task}" telah selesai`);


        } else {
            console.log(`data dengan id : ${id + 1} tidak ditemukan`);
        }
        break;
    case 'uncomplete':
        if (data[id]) {
            data[id].complete = false;
            writeData(data)
            console.log(`"${data[id].task}" status selesai dibatalkan`);
        } else {
            console.log(`data dengan id : ${id + 1} tidak ditemukan`);
        }
        break;
    case 'list:outstanding':
        console.log('daftar pekerjaan yang belum selesai');

        if (params[3] == "desc") {
            for (let i = data.length - 1; i >= 0; i--) {
                if (!data[i].complete)
                    console.log(`${i + 1}.[${data[i].complete ? 'x' : ' '}] ${data[i].task}`);
            }
        } else {
            for (let i = 0; i < data.length; i++) {
                if (!data[i].complete)
                    console.log(`${i + 1}.[${data[i].complete ? 'x' : ' '}] ${data[i].task}`);

            }
        }
        break;
    case 'list:completed':
        console.log('daftar pekerjaan yang belum selesai');

        if (params[3] == "desc") {
            for (let i = data.length - 1; i >= 0; i--) {
                if (data[i].complete)
                    console.log(`${i + 1}.[${data[i].complete ? 'x' : ' '}] ${data[i].task}`);
            }
        } else {
            for (let i = 0; i < data.length; i++) {
                if (data[i].complete)
                    console.log(`${i + 1}.[${data[i].complete ? 'x' : ' '}] ${data[i].task}`);

            }
        }
        break;
    case 'tag':
        if (data[id]) {

            let tagAdded = [];
            params.slice(4).forEach(element => {
                if (!data[id].tags.includes(element)) {
                    tagAdded.push(element)
                    data[id].tags.push(element);
                }
            });
            writeData(data)
            console.log(`tag${tagAdded.length > 1 ? 's' : ' '} "${tagAdded}" telah ditambahkan`);
        } else {
            console.log(`data dengan id : ${id + 1} tidak ditemukan`);
        }
        break;
    default:
        if (params[2].split(':')[0] == 'filter') {
            console.log(`daftar kerjaan berdasarkan tag ${params[2].split(':')[1]} :`);
            for (let i = 0; i < data.length; i++) {
                if (data[i].tags.includes(params[2].split(':')[1]))
                    console.log(`${i + 1}.[${data[i].complete ? 'x' : ' '}] ${data[i].task}`);
            }
        } else {
            console.log(msg);
        }
}


