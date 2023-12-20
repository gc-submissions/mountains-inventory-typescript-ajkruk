import { Product } from "./products";

interface InventoryItem {
        product: Product,
        quantity: number, 
    }

    let inventory: InventoryItem[] = [
        {
            product : {
                name: "motor",
                price: 10.00
            },
            quantity : 10
        },

        {
            product : {
                name: "sensor",
                price: 12.50
            },
            quantity : 4
        },

        {
            product : {
                name: "LED",
                price: 1.00
            },
            quantity : 20
        },
    ];
    
export const calcInventoryValue = (inventory: InventoryItem[]): number => {
    let total = 0;
    if (inventory.length < 1 ) {
        return 0;
    }
    for (let item of inventory) {
        let totalPrice = item.product.price * item.quantity 
        total = total + totalPrice;
    }
    return total;
}

const inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);