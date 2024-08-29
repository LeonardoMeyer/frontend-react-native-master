import { useEffect, useState } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import CardAccount from './cardAccount'
//import CardAccount2 from './CardAccount2'
//import Calc from './Calc'

export default function Content(){

  const [accounts, setAccounts] = useState([])
 
   useEffect(() => {
        const getAccounts = async () => {
            const response = await fetch('http://localhost:3000/account/list')
            if(response.ok){
              const data = await response.json()
              console.log(data)
              setAccounts(data.accounts)
              return
            }
            console.log('Erro ao carregar accounts')
            return
        }

        getAccounts()
   }, [])


    return (
        <View style={styles.content}>
        
        {/* <Calc /> */}

        { accounts.length === 0 && <Text>Loading...</Text>}

        {
          accounts.map( (account) => 
            <CardAccount
              key={account.id} 
              service={account.service}
              imgUrl={account.logo_image}
              userName={account.username}
            /> 
          )
        }
        </View>
    )
}
  //     id: 1,
  //     service: 'LinkedIn',
  //     imgUrl: 'https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png',
  //     userName: '@Leonardo Meyer'
  //   },
  //   {
  //     id: 2,
  //     service: 'GitHub',
  //     imgUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
  //     userName: 'LeonardoMeyer'
  //   },
  //   {
  //     id: 3,
  //     service: 'Medium',
  //     imgUrl: 'https://www.svgrepo.com/show/354057/medium-icon.svg',
  //     userName: 'LeonardoMeyer'
  //   }
  // ];

  return (
    <View style={styles.content}>
      {accounts.map(account => (
        <CardAccount2
          key={account.id}
          service={account.service}
          imgUrl={account.imgUrl}
          userName={account.userName}
        />
      ))}
    </View>
  );

const styles = StyleSheet.create({
  content: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
