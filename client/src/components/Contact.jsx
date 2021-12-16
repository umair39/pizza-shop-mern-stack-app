import React from 'react'
import { Container, Row, Col, Table, Image } from 'react-bootstrap'
import {FiPhoneCall} from 'react-icons/fi'
import {ImMobile2} from 'react-icons/im'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
    return (
        <>
        <Container style={{marginTop:'50px'}}>
        <Row>
        <Col md={6}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aperiam, corporis cumque consequuntur facere laborum labore suscipit temporibus ipsam natus voluptatum optio assumenda ullam necessitatibus sunt praesentium? Dignissimos atque voluptatem itaque vero quibusdam ratione commodi id sequi nihil accusamus iusto neque reprehenderit fugit, a quidem explicabo dolore voluptates sunt facilis. Nesciunt inventore rem hic? Quam quo libero beatae reprehenderit vero nam sed assumenda odio quibusdam consequuntur sint molestias repudiandae, enim veniam aliquam debitis pariatur tempore voluptatem tenetur culpa in consectetur fugiat deserunt. Accusantium repellendus assumenda dignissimos enim dolore, provident minus labore quo laudantium ab! Vero voluptatem vitae id ex quam, eius molestias. Veniam accusantium perferendis aliquid? Voluptas, mollitia fugiat. Deserunt, libero eius culpa sunt vitae !</p>
            <Table striped bordered hover size="sm" className="text-center">
               <thead>
                 <tr>
                   <th className="bg-warning text-center" colSpan={3}>... Contact Details ... </th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td><FiPhoneCall/></td>
                   <td>Phone</td>
                   <td>0304-9892083</td>
                 </tr>
                 <tr>
                   <td><ImMobile2/></td>
                   <td>Call</td>
                   <td>0304-9892083</td>
                 </tr>
                 <tr>
                   <td><AiOutlineMail/></td>
                   <td>Email</td>
                   <td>chumairtalib3232@gmail.com</td>
                 </tr>
               </tbody>
            </Table>
        </Col>
        <Col>
           <Image src="images/farmhouse.jpg" alt="contact-img" style={{width:'100%', height:"100%"}}/>
        </Col>
        </Row>    
        </Container>
        </>
    )
}

export default Contact;
