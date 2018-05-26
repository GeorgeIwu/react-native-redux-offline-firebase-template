'use strict'

import { StackNavigator }       from 'react-navigation';
import Index                    from './Index';
import SignIn                   from './SignIn';
import SignUp                   from './SignUp';
import TabIndex                 from '../TabIndex';
import Profile                  from '../profile/Index';
import Saved                    from '../saved/Index';
import Trips                    from '../trips/Index';
import Inbox                    from '../inbox/Index';

const options = {
    header: null
}
const StackAuth = StackNavigator(
    {
        Index: {
            screen: Index
        },
        SignIn: {
            screen: SignIn
        },
        SignUp: {
            screen: SignUp
        },
        TabIndex: {
            screen: TabIndex
        },
        Profile: {
            screen: Profile
        },
        Saved: {
            screen: Saved
        },
        Trips: {
            screen: Trips
        },
        Inbox: {
            screen: Inbox
        }
    },
    {
        navigationOptions: options
    }
)

module.exports = StackAuth
