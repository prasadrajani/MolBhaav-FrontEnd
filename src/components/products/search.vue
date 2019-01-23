<template>
    <div>
    <navbar></navbar>
    <categorybody :productList="productList"></categorybody>
    <footer-component></footer-component>
    </div>
</template>

<script>
import Categorybody from '@/components/Categorybody'
import navigation from '@/components/navigation'
//mport FooterComponent from '@/components/FooterComponent'

export default {
    name: 'SearchProduct',
    data() {
        return {
            productList : []
        }
    },
    mounted()  {
             fetch('http://10.177.7.82:8080/search/find?searchTerm='+this.$route.params.string).then(response => {
			  return response.json();
			}).then(data => {
                console.log(data);
                this.productList = data;
			}).catch(err => {console.log(err)
            });
            
    },
    components:{
        Categorybody,Navbar,FooterComponent
    }

}
</script>

<style>

</style>