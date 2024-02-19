import BuyProduct from '../page/User/BuyProduct'
import UserDashbord from '../page/User/UserDashbord'
export const userPath = [
    {
        name:'User Dashbord',
        path:'dashbord',
        element:<UserDashbord />
    },
    {
        name:'Product Management',
        children:[
            
            {
                name:'Buy Product',
                path:'buy-product',
                element:<BuyProduct/>
            },
        ]
    }
]



