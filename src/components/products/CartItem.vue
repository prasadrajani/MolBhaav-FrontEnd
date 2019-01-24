<template>
    <div>
        <v-layout>
            <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text" height="200px">
                <v-layout>
                    {{productImageUrl}}
                    {{productName}}
                    {{productDescription}}
                    {{productUsp}}
                    {{price}}
                    {{merchantId}}
                    {{categoryId}}
                    <div id="quan">
                    <v-btn flat small class="grey" @click="dec()" >-</v-btn>
                    {{ buying }}
                    <v-btn flat small class="grey" @click="inc(availableQuantity)">+</v-btn>
                    {{ total }}
                    <button @click="addToCartTotal">CONFIRM</button>
                    </div>
                    <v-card-actions class="pa-3">
                    </v-card-actions>
                </v-layout>
            </v-card>
        </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    name: 'cart-item',
    data() {
        return{
            items:1,
        }
    },
    props: ['productImageUrl', 'productName', 'productDescription', 'productUsp', 'price', 'merchantId', 'categoryId', 'quantity', 'availableQuantity'],
    computed: {
        buying() {
            return this.items
        },
        total: function() {
            return this.items * this.price
        }
    },
    methods: {
        dec(){
            if(this.items>1)
                this.items = this.items - 1
            return this.items
        },
        inc(quan){
            if(this.items<quan)
                this.items+=1
            return this.items
        },
        addToCartTotal(){
            this.$emit("message", "X")
        }
    }
}
</script>
