import { log } from "console";

// Bank example

interface Client {
	id: string | number;
	name: string;
	sold: number;
	homeTown?: string;
	haveLicense: boolean;
}

interface Methods {
	withdraw: (client: Client, amount: number) => Client;
	set: (client: Client, amount: number) => Client;
	credit: (client: Client, amount: number) => Client;
}

let sisttara: Client = {
	name: "Sisttara",
	id: "T320787",
	sold: 5000,
	haveLicense: true,
};

const operations: Methods = {
	withdraw: (client, amount) => {
		return (sisttara = {
			...client,
			sold: client.sold - amount,
		});
	},
	set: (client, amount) => {
		return (client = {
			...client,
			sold: client.sold + amount,
		});
	},
	credit(client, amount) {
		return (client = {
			...client,
			sold: client.sold + amount,
		});
	},
};
operations.withdraw(sisttara, 3000);

log(sisttara);
