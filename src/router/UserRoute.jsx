import UserDashbord from '../page/User/UserDashbord'
export const userPath = [
    {
        name:'User',
        path:'dashbord',
        element:<UserDashbord />
    },
    {
        name:'User',
        children:[
            {
                name:'Dashbord',
                path:'dashbord',
                element:<UserDashbord/>
            },
            {
                name:'Dashbord',
                path:'dashbord',
                element:<UserDashbord/>
            },
        ]
    }
]



