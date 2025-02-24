function Student()
{
    return(
        <center>
            <h1>Student Details</h1>
        <table border='1'>

        <thead>
        <tr>
        <th>slno.</th>
        <th>Name</th>
        <th>RollNo.</th>
        <th>Age</th>
        <th>grade</th>
        <th>course</th>
        <th>Image</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>1</td>
        <td>Appu</td>
        <td>101</td>
        <td>20</td>
        <td>A+</td>
        <td>MCA</td>
        <td><img src="https://img.freepik.com/free-vector/cat-vintage-style_53876-81347.jpg?t=st=1740117000~exp=1740120600~hmac=5b3ad750bd1d509112d698683579bc55ef93a74b0d1e2271de9f50cde0d71e9e&w=996" width="50px" height="50px"></img></td>

        </tr>
        <tr>
                <td>2</td>
                <td>Pooja</td>
                <td>102</td>
                <td>21</td>
                <td>A</td>
                <td>BE</td>
                <td><img src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/69970/258927/1622395661169_8897FA43-A9D1-48B6-A96A-94B2E68CB1CC__59958.1687166920.jpg?c=2" width="50px" height="50px"></img></td>
                </tr>
        <tr>
                <td>3</td>
                <td>MAdl</td>
                <td>103</td>
                <td>20</td>
                <td>B+</td>
                <td>BCA</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBUKb12ajK8HZcmvZa5KfbH_GXZ3oJFZ4lg&s" width="50px" height="50px"></img></td>

                </tr>
        </tbody>
        </table>
        </center>
        )
    }
function Myfvrt()
{
    return(
        <center>
            <h1>My Favorite</h1>
        <table border='1'>

        <thead>
        <tr>
        <th>SlNo.</th>
        <th>Place</th>
        <th>Food</th>
        <th>dress</th>
        <th>God</th>
        <th>Image</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>1</td>
        <td>Greenary</td>
        <td>Chicken Biriyani</td>
        <td>Saree</td>
        <td>Shiva</td>
        <td><img src="https://phulari.com/cdn/shop/files/Image_Editor_4.jpg?v=1717600233" width="50px" height="50px"></img></td>

        </tr>
        <tr>
                <td>2</td>
                        <td>Beach</td>
                        <td>IceCream</td>
                        <td>Jeans</td>
                        <td>Durga</td>
                <td><img src="https://i.pinimg.com/736x/c8/29/10/c82910541f5bff48d3c0b0e25245155a.jpg" width="50px" height="50px"></img></td>
                </tr>
        <tr>
                <td>3</td>
                        <td>Falls</td>
                        <td>PaniPuri</td>
                        <td>Kurtha</td>
                        <td>Rama</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIyqqxnBKqzqbReBw_yHjLEqtYPN5zBilJg&s" width="50px" height="50px"></img></td>

                </tr>
        </tbody>
        </table>
        </center>
        )
    }

function Info()
{
    return(
        <div><h1>Information</h1>
        <Student/>
        <Myfvrt/>
        </div>
        )
    }
export default Info;