<template>
  <v-container>
    <v-layout justify-center row wrap>
      <v-flex mt-5 xs12 lg6 md8 sm10>
        <v-form>
          <v-text-field name="email" label="Email" type="email" required></v-text-field>
          <v-text-field type="password" name="assword" label="Password" required></v-text-field>
          <v-btn type="submit" color="teal">{{ isLogin ? 'Login' : 'Sign Up' }}</v-btn>
          <v-btn color="blue-grey lighten-2" @click="isLogin = !isLogin">
            Switch to {{ isLogin ? 'Signup' : 'Login' }}
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "AdminAuthPage",
  data() {
    return {
      isLogin: true
    };
  }
};
</script>

