import FileUpload from '@/components/FileUpload'
import PageTItle from '@/components/PageTItle'
import { Col, Row } from 'react-bootstrap'
import AddCategory from './components/AddCategory'
import CategoryEditCard from './components/CategoryEditCard'
import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Category Edit' }

const CategoryEditPage = () => {
  return (
    <>
      <PageTItle title="CATEGORY EDIT" />
      <Row>
        <CategoryEditCard />
        <Col xl={9} lg={8}>
          <FileUpload title="Add Thumbnail Photo" />
          <AddCategory />
        </Col>
      </Row>
    </>
  )
}

export default CategoryEditPage
