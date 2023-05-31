import { FormControl, FormLabel, Input, Select, Flex } from '@chakra-ui/react'

export const Filter = ({ handleFilter, filterProd }) => {
  return (
    <Flex
      as="form"
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      gap={4}
      m={3}
    >
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="prodName"
          value={filterProd.prodName}
          placeholder="Product name"
          onChange={handleFilter}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Category</FormLabel>
        <Select name="category" onChange={handleFilter}>
          <option value="all">All</option>
          <option value="woman">For woman</option>
          <option value="makeUp">MakeUp</option>
          <option value="men">For men</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          name="price"
          value={filterProd.price}
          onChange={handleFilter}
          placeholder="Less than"
        />
      </FormControl>
    </Flex>
  )
}
