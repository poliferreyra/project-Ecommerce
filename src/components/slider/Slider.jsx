// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Navigation, Pagination, EffectFlip } from 'swiper/modules'
// Import Swiper styles
import './slider.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import 'swiper/css/effect-flip'
import './styleNav.css'

import { useGetProducts } from '../../hook/useGetProducts'
import {
  Image,
  Text,
  Stack,
  Button,
  Card,
  CardBody,
  Heading,
  CardFooter,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Slider = () => {
  const { filterProdOrderBy } = useGetProducts()
  const { addProductToCart } = useContext(CartContext)
  return (
    <Swiper
      className="styleNav"
      modules={[Navigation, Pagination, EffectFlip]}
      spaceBetween={50}
      effect={'flip'}
      grabCursor={true}
      navigation={true}
      pagination={true}
      loop={true}
    >
      {filterProdOrderBy.map((item) => (
        <SwiperSlide key={item.id}>
          <Card
            p={5}
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '50%', sm: '80%', md: '200px' }}
              src={item.img}
              alt={item.prodName}
            />

            <Stack>
              <CardBody>
                <Heading size="md">{item.prodName}</Heading>

                <Text py="2">{item.description}</Text>
              </CardBody>

              <CardFooter>
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
              </CardFooter>
            </Stack>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
