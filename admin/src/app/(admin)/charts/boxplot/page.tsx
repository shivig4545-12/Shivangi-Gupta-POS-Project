import { Col, Container, Row } from 'react-bootstrap'
import UIExamplesList from '@/components/UIExamplesList'
import AllBoxPlotCharts from './components/AllBoxPlotCharts'
import type { Metadata } from 'next'
import PageTItle from '@/components/PageTItle'

const metadata: Metadata = { title: 'Boxplot Alert' }

const BoxPlotCharts = () => {
  return (
    <>
      <PageTItle title="APEX BOXPLOT CHART" />
      <Container>
        <Row>
          <Col xl={9}>
            <AllBoxPlotCharts />
          </Col>
          <Col xl={3}>
            <UIExamplesList
              examples={[
                { link: '#basic', label: 'Basic Boxplot' },
                { link: '#scatter', label: 'Scatter Boxplot' },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BoxPlotCharts
