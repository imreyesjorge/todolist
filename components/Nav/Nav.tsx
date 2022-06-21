import {
   Flex,
   Spacer,
   Center,
   Button,
   Editable,
   EditableInput,
   EditablePreview,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Nav = () => {
   const { colorMode, toggleColorMode } = useColorMode();
   const [listName, setListName] = useState('To-Do List');

   useEffect(() => {
      const response = localStorage.getItem('listName');

      response && setListName(response);
   }, []);

   useEffect(() => {
      localStorage.setItem('listName', listName);
   }, [listName]);

   return (
      <Flex as="nav" p="2">
         <Center>
            <Editable
               defaultValue={listName}
               value={listName}
               size="lg"
               onChange={(newValue) => {
                  if (newValue == '') {
                     setListName('To-Do List');
                  } else {
                     setListName(newValue);
                  }
               }}>
               <EditablePreview />
               <EditableInput />
            </Editable>
         </Center>
         <Spacer />
         <Center>
            <Button onClick={toggleColorMode}>
               {colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
         </Center>
      </Flex>
   );
};

export default Nav;
