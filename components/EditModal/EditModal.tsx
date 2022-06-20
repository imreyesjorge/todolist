import { Box, Input, Button, useColorModeValue } from '@chakra-ui/react';

const EditModal = ({
   editModalData,
   setEditModalData,
   closeModal,
   updateTodo,
}) => {
   const backgroundColor = useColorModeValue('white', 'gray.800');

   return (
      <Box
         width="100%"
         height="100vh"
         position="absolute"
         top={0}
         left={0}
         p={4}
         bg="blackAlpha.200"
         display="flex"
         justifyContent="center"
         flexDirection="column">
         <Box
            bg={backgroundColor}
            width="50%"
            p={8}
            borderRadius={8}
            position="absolute"
            shadow="xl"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)">
            <Box display="flex" flexDirection="column" gap={3} mb={4}>
               <Input
                  placeholder="New Title"
                  value={editModalData.newTitle}
                  onChange={(event) => {
                     setEditModalData({
                        ...editModalData,
                        newTitle: event.target.value,
                     });
                  }}
               />
               <Input
                  placeholder="New Description"
                  value={editModalData.newBody}
                  onChange={(event) => {
                     setEditModalData({
                        ...editModalData,
                        newBody: event.target.value,
                     });
                  }}
               />
            </Box>
            <Box display="flex" justifyContent="center" gap={4}>
               <Button onClick={closeModal}>Cancel</Button>
               <Button
                  onClick={() => {
                     updateTodo(
                        editModalData._id,
                        editModalData.newTitle,
                        editModalData.newBody,
                     );
                  }}
                  colorScheme="blue">
                  Update
               </Button>
            </Box>
         </Box>
      </Box>
   );
};

export default EditModal;
