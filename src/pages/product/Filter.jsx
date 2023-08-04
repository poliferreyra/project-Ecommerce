import { FormControl, FormLabel, Input, Select, Flex } from '@chakra-ui/react'

export const Filter = ({ handleFilter, filterProd }) => {
  return (
    <Flex
      as="form"
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      gap={4}
      m={3}
      p={3}
      bg="body"
    >
      <FormControl>
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Name</FormLabel>
        <Input
          size={{ base: 'sm', md: 'md' }}
          type="text"
          name="prodName"
          value={filterProd.prodName}
          placeholder="Product name"
          onChange={handleFilter}
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Category</FormLabel>
        <Select
          name="category"
          onChange={handleFilter}
          size={{ base: 'sm', md: 'md' }}
        >
          <option value="">All</option>
          <option value="woman">For woman</option>
          <option value="makeUp">MakeUp</option>
          <option value="men">For men</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Price</FormLabel>
        <Input
          size={{ base: 'sm', md: 'md' }}
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
