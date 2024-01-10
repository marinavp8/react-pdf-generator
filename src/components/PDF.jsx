import {
    Document,
    Text,
    Page,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";
import photo from '../pdf-photo.png'

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'red'
    }
})

function PDF() {
    return (
        <Document >
            <Page style={styles.page}>
                <Text>Hello world!</Text>
                <Image src={photo} />
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam distinctio, voluptas voluptatum voluptatem delectus accusantium quas. Libero recusandae voluptas doloribus. Quidem natus facere velit est ex quas distinctio incidunt. Mollitia asperiores accusantium sit corporis minima perspiciatis cupiditate ut voluptatem, consequatur doloribus est illum reiciendis laboriosam in ratione alias modi porro quos magnam doloremque? Suscipit debitis non, nihil adipisci fuga laboriosam fugiat ipsa explicabo harum magnam nesciunt dolorum numquam mollitia delectus odit eos eaque, ipsum, minima consequatur expedita fugit! Assumenda dolor facilis debitis nam! Nihil ipsam, cupiditate quos temporibus quia vel ipsum, minima, saepe eligendi repudiandae nostrum. Necessitatibus nesciunt ipsam enim!</Text>
            </Page>
        </Document>
    )

}
export default PDF