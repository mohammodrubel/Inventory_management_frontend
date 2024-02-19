import CreateProduct from '../page/Admin/CreateProduct'
import AdminDashbord from '../page/Admin/AdminDashbord'
import SalesProduct from '../page/Admin/SalesProduct'
import QuantityWiseProduct from '../page/Admin/QuantityWiseProduct'

export const adminPath = [
    {
        name:'Dashbrod',
        path:'dashbord',
        element:<AdminDashbord />
    },
    {
        name:'Admin',
        children:[
            {
                name:'Create Product',
                path:'create-product',
                element:<CreateProduct/>
            },
            {
                name:'Date wise product sales Report',
                path:'sales-product',
                element:<SalesProduct/>
            },
            {
                name:'Date wise Quantity sales Report',
                path:'sales-product-quantity',
                element:<QuantityWiseProduct/>
            }
        ]
    }
]
