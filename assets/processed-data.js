import User from '../models/User';
const Users = [];
const fs = require('fs');



for (const id in ['2','7','2627','10780','13116','14842','17172','20566','21632','27366','29127','30024','30332','31870','33550','34407','34429','36495','37327','38639']) {
    console.log(id);
    fs.readFile(`./data/${id}.json`, 'utf-8', (err, jsonString) => {
        if (err) {
            console.log(err);
        } else {
            try {
                const data = JSON.parse(jsonString);
                console.log(data);
            } catch(err) {
                console.log(err);
            }
        }
    });
}





export default Users;