<script>

export default{
    data(){
        return{
            Fname: this.$route.params.Fname,
            Lname: this.$route.params.Lname,
            Email: this.$route.params.Email,
            Password: this.$route.params.Password,
            Address: this.$route.params.Address,
            Address2: this.$route.params.Address2,
            City: this.$route.params.City,
            State: this.$route.params.State,
            Zip: this.$route.params.Zip,
            Sex: this.$route.params.Sex
        }
    },
    methods:{
        returnImage(Sex){
            if(Sex=='Uomo'){
                return 'https://st3.depositphotos.com/19428878/35382/v/450/depositphotos_353826748-stock-illustration-unknown-man-profile-avatar-vector.jpg'
            }else if(Sex=='Donna'){
                return 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png'
            }
        }
    }
}
</script>
<template>
<h1 style="text-align: center;margin-left: -400px;margin-top: 40px;">My personal account</h1> 
<br>
<br>
<div class="box">
    <div class="row">
    <img :src="returnImage(this.Sex)" alt="immagine profilo" style="height: 80px;width: 120px;">
    <button type="button" class="btn btn-success" style="height: 40px;width: 160px;">Cambia Foto</button>
</div>
<div class="row" style="margin: 10px;text-align: center;">
    <div class="col-4" style="font-weight: bold;font-size: large;">
        First Name:<input style="border: 1px solid black;" type="text" readonly class="form-control-plaintext" :value="this.Fname">
    </div>
    <div class="col-4" style="font-weight: bold;font-size: large;">
        Last Name:<input style="border: 1px solid black;" type="text" readonly class="form-control-plaintext" :value="this.Lname">
    </div>
</div>
    <div class="row" style="margin: 10px;">
    <div class="col-9" style="font-weight: bold;font-size: large;">
        Email:<input style="border: 1px solid black;" type="text" readonly class="form-control-plaintext" :value="this.Email">
    </div>
</div>
<div class="row" style="margin: 10px;">
    <div class="col-9" style="font-weight: bold;font-size: large;">
        Password:<input style="border: 1px solid black;" type="text" readonly class="form-control-plaintext" :value="this.Password">
    </div>
</div>
<div class="row" style="margin: 10px;">
    <div class="col-9" style="font-weight: bold;font-size: large;">
        Address:<input style="border: 1px solid black;" type="text" readonly class="form-control-plaintext" :value="this.Address">
    </div>
</div>
<div class="row" style="margin: 10px;">
    <div class="col-9" style="font-weight: bold;font-size: large;">
        Address2:<input style="border: 1px solid black;" type="text" readonly class="form-control-plaintext" :value="this.Address2">
    </div>
</div>
<div class="row" style="margin: 10px;">
    <div class="col-9" style="font-weight: bold;font-size: large;">
        City:<input  style="border: 1px solid black;" type="text" readonly class="form-control-plaintext" :value="this.City">
    </div>
</div>
<div class="row" style="margin: 10px;">
    <div class="col-9" style="font-weight: bold;font-size: large;">
        State:<input style="border: 1px solid black;" type="text" readonly class="form-control-plaintext" :value="this.State">
    </div>
</div>
<div class="row" style="margin: 10px;">
    <div class="col-9" style="font-weight: bold;font-size: large;">
        Zip:<input style="border: 1px solid black;" type="text" readonly class="form-control-plaintext" :value="this.Zip">
    </div>
</div>
<div class="row" style="margin: 10px;">
    <div class="col-9" style="font-weight: bold;font-size: large;">
        Sex:<input style="border: 1px solid black;" type="text" readonly class="form-control-plaintext" :value="this.Sex">
    </div>
</div>
<div class="row" style="text-align: center;margin-left: -400px;">
    <RouterLink to="/registration"><button type="button" class="btn btn-primary">Modifica</button></RouterLink>
</div>
</div>
<br>

</template>
<style>
.box{
    width: 1500px;
    height: 900px;
}
</style>