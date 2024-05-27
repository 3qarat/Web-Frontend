<template>
    <header>

        <div class="logo">
            <a href="/">
                <img src="/public/images/Logo.svg" alt="Logo" class="logo__img">
            </a>
        </div>

        <nav class="nav">
            
            <ul class="nav__list">
                <li class="nav__item">
                    <router-link to="/" class="nav__link">الرئيسية</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/units" class="nav__link">الوحدات السكنية</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/favorites" class="nav__link">المفضلة</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/about" class="nav__link">معلومات عنا</router-link>
                </li>
            </ul>
        </nav>

        
        <router-link to="/contact" class="contact__link">
            <button class="btn__primary">تواصل معنا</button>
        </router-link>
    
    </header>
    
</template>

<script setup>

</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 5%;
    border-bottom: #d0d0d0 1px solid;
}
    .nav{
        width:80%;
        display: flex;
        justify-content: flex-start;
        margin-right:75px ;
    }
    .nav__list{
        list-style: none;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        gap:50px;
    }
    .nav__item{
    
    }
    .nav__link{
        text-decoration: none;
    } 
    .btn__primary{
        background-color: var(--blue);
        color:white;
        padding: 5px 24px;
        border-radius:4px;
        cursor: pointer;
        border: none;
        outline: none;
    }
    .btn__primary:hover{
        
           background-color: #6E8AE9;
        
    }
    .btn__primary:active{
           background-color: var(--dark-blue)
    }
    .contact__link{
        text-decoration: none;
        color: white;
    }

</style> 


