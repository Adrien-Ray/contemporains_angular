export class Caracter {
    constructor(
        public id: number,
        public attributes: {
            name: string,
            born: string,
            die: string,
            desc: string,
            createdAt: string,
            updatedAt: string,
            publishedAt: string,
            wikipedia: string,
            portrait: string,
            year_born: number,
            year_die: number,
            caracters_types: {
                data: [
                    {
                        id: number,
                        attributes: {
                            label: string,
                        }
                    }
                ]
            }
            relations: {
                data: [
                    {
                        id: number,
                        attributes: {
                            name: string,
                            born: string,
                            die: string,
                            desc: string,
                            createdAt: string,
                            updatedAt: string,
                            publishedAt: string,
                            wikipedia: string,
                            portrait: string,
                            year_born: number,
                            year_die: number,
                        }
                    }
                ]
            }
        },
    ) { }
}
