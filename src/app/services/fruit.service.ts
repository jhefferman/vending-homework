import { Injectable } from '@angular/core';
import { Fruit } from '../model/fruit.interface';

@Injectable()
export class FruitService {
    public fruits: Array<Fruit> = [
        {
          "name": "Granny Smith Apple",
          "description": "A Granny Smith apple is a sour tasting green apple. Granny Smith's are crisp, juicy, tart apples.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Granny_smith_and_cross_section.jpeg",
          "quantityAvailable": 5,
          "img": "assets/img/apple.jpeg"
        },
        {
          "name": "Banana",
          "description": "A banana is an elongated usually tapering tropical fruit with soft pulpy flesh enclosed in a soft usually yellow rind.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpeg",
          "quantityAvailable": 10,
          "img": "assets/img/banana.jpeg"
        },
        {
          "name": "Grapefruit",
          "description": "A grapefruit is a large round citrus fruit with a bitter yellow rind and a juicy somewhat tart pale yellow, pink, or reddish pulp.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Grapefruit_700x490.jpeg",
          "quantityAvailable": 2,
          "img": "assets/img/grapefruit.jpeg"
        },
        {
          "name": "Kiwi",
          "description": "A Kiwi is the edible fruit of a Chinese gooseberry having a fuzzy brown skin and slightly acidic typically green flesh.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpeg",
          "quantityAvailable": 4,
          "img": "assets/img/kiwi.jpeg"
        },
        {
          "name": "Orange",
          "description": "Oranges are most often covered in a thick, orangey-yellow skin, and the inside is divided into segments of juicy pulp. Oranges are typically eaten by peeling the skin and consuming only the juice and pulp inside.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/b/b0/OrangeBloss_wb.jpeg",
          "quantityAvailable": 5,
          "img": "assets/img/orange.jpeg"
        },
        {
          "name": "Pear",
          "description": "A pear is a pome fruit of a tree of the rose family that typically has a pale green or brownish skin, a firm juicy flesh, and an oblong shape in which a broad base end tapers upward to a narrow stem end.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Pears.jpeg",
          "quantityAvailable": 5,
          "img": "assets/img/pear.jpeg"
        },
        {
          "name": "Pineapple",
          "description": "The oval to cylindrical-shaped, compound fruit develops from many small fruits fused together. It is both juicy and fleshy with the stem serving as the fibrous core. ",
          "image": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpeg",
          "quantityAvailable": 7,
          "img": "assets/img/pineapple.jpeg"
        },
        {
          "name": "Strawberry",
          "description": "A strawberry is a small red fruit which is soft and juicy and has tiny yellow seeds on its skin.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/7/79/Strawberry_Cross_BNC.jpeg",
          "quantityAvailable": 8,
          "img": "assets/img/strawberry.jpeg"
        }
    ];

    constructor() {
        this.sortFruits();
    }

    private sortFruits() {
        this.fruits.sort((n1, n2) => {
            if (n1.name < n2.name) {
              return -1;
            }
            if (n1.name > n2.name) {
              return 1;
            }
            return 0;
        });
    }

    public purchaseFruit(fruit: Fruit) {
        if (fruit && fruit.quantityAvailable > 0) {
            fruit.quantityAvailable--;
        }
    }
}
