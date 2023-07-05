import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import './slider.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { useGetProducts } from '../../hook/useGetProducts'
import { Image, Box, Text, Stack, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'

export const Slider = () => {
  const { filterProdOrderBy } = useGetProducts()
  const { addProductToCart } = useContext(CartContext)
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {filterProdOrderBy.map((item) => (
        <SwiperSlide key={item.id}>
          <Box w="100%" p={2} m={1}>
            <Image
              src={item.img}
              alt={item.prodName}
              borderRadius="lg"
              maxW="70%"
              maxH="40%"
            />
            <Stack mt="6">
              <Text fontWeight="semibold" fontSize="sm">
                {item.prodName}
              </Text>

              <Text color="blue.600" fontSize="1xl">
                {`$ ${item.price}`}
              </Text>
            </Stack>
            <Stack>
              <Button
                as={NavLink}
                size={{ base: 'xs', md: 'sm' }}
                variant="solid"
                bg="#A2EAF4"
                to={`/products/${item.id}`}
                _hover={{
                  fontWeight: 'semibold',
                  color: '#DF166D',
                }}
              >
                See detail
              </Button>
              <Button
                size={{ base: 'xs', md: 'sm' }}
                variant="solid"
                bg="#F5E90C"
                _hover={{
                  fontWeight: 'semibold',
                  color: '#DF166D',
                }}
                onClick={() => addProductToCart(item, 1)}
              >
                Add to cart
              </Button>
            </Stack>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
