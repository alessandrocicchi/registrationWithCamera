<script>
import { RouterLink } from 'vue-router'
import MyAccount from './MyAccount.vue';
export default{
    data(){
        return{
            Fname: ' ',
            Lname: ' ',
            Email: ' ',
            Password: ' ',
            Address: ' ',
            Address2: ' ',
            City: ' ',
            State: ' ',
            Zip: ' ',
            Sex: ' '
        }
    },
    components:{MyAccount}
}
</script>
<template>
<div class="sfondo">
  <h1 style="text-align: center;">Registrati</h1>
<br>
<div class="row">
  <div class="col">
    <label for="inputFirstName" class="form-label">First Name</label>
    <input type="text" class="form-control" placeholder="First name" v-model="Fname">
  </div>
  <div class="col">
    <label for="inputLastName" class="form-label">Last Name</label>
    <input type="text" class="form-control" placeholder="Last name" v-model="Lname">
  </div>
</div>
<br>
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" v-model="Email">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" v-model="Password">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" v-model="Address">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" v-model="Address2">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" v-model="City">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select v-model="State" class="form-select">
      <option>Italy</option>
      <option>UK</option>
      <option>Germany</option>
      <option>France</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" v-model="Zip">
  </div>
  <div class="form-check">
  <input class="form-check-input" value="Uomo" type="radio" v-model="this.Sex">
  <label class="form-check-label" for="exampleRadios1">
    Uomo
  </label>
</div>
<div class="form-check" >
  <input class="form-check-input" type="radio" value="Donna" v-model="this.Sex">
  <label class="form-check-label">
    Donna
  </label>
</div>
  <div class="col-6">
    <RouterLink to="/registration2"><button type="submit" class="btn btn-primary" style="font-weight: bold;">Continue</button></RouterLink>
  </div>
  <div class="col-6" style="text-align: right;">
    <RouterLink :to="{ name: 'account', params: {Fname: this.Fname, Lname: this.Lname,Email:this.Email, Password: this.Password, Address: this.Address, Address2: this.Address2, City: this.City, State: this.State, Zip:this.Zip, Sex:this.Sex}}" ></RouterLink>
    <button @click="$router.push({ name: 'account', params: {Fname: this.Fname, Lname: this.Lname,Email:this.Email, Password: this.Password, Address: this.Address, Address2: this.Address2, City: this.City, State: this.State, Zip:this.Zip, Sex:this.Sex}})" type="submit" class="btn btn-danger" style="font-weight: bold;">My account</button>
  </div>
</form>
</div>
</template>
<style>
.sfondo{
    width: 1655px;
    height: 600px;
    margin-left: -230px;
}
</style>