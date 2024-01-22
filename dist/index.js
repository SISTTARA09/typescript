import { log } from "console";
let sisttara = {
    name: "Sisttara",
    id: "T320787",
    sold: 5000,
    haveLicense: true,
};
const operations = {
    withdraw: (client, amount) => {
        return (sisttara = Object.assign(Object.assign({}, client), { sold: client.sold - amount }));
    },
    set: (client, amount) => {
        return (client = Object.assign(Object.assign({}, client), { sold: client.sold + amount }));
    },
    credit(client, amount) {
        return (client = Object.assign(Object.assign({}, client), { sold: client.sold + amount }));
    },
};
operations.withdraw(sisttara, 3000);
log(sisttara);
