import {
  FormControl,
  FormLabel,
  SimpleGrid,
  Input,
  Select,
} from '@chakra-ui/react'

export const Filter = () => {
  return (
    <SimpleGrid columns={3} spacing={10} as="form" m={3}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name" placeholder="Product name" />
      </FormControl>
      <FormControl>
        <FormLabel>Category</FormLabel>
        <Select placeholder="Select">
          <option>Perfume</option>
          <option>Cosmetics</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input type="number" name="price" placeholder="Price" />
      </FormControl>
      <FormControl></FormControl>
    </SimpleGrid>
  )
}
