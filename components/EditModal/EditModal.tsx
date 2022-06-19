import { Box, Input, Button } from '@chakra-ui/react';

const EditModal = ({ editModalData, setEditModalData, closeModal }) => {
   return (
      <Box
         as="section"
         width="100%"
         height="100vh"
         position="absolute"
         top={0}
         left={0}
         p={4}
         borderRadius={8}
         bg="gray.50"
         display="flex"
         justifyContent="center"
         flexDirection="column">
         <Box>
            <Box display="flex" flexDirection="column" gap={3} mb={4}>
               <Input
                  placeholder="New Title"
                  bg="white"
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
                  bg="white"
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
               <Button colorScheme="blue">Update</Button>
            </Box>
         </Box>
      </Box>
   );
};

export default EditModal;
