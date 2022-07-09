<template functional>
    <nav class="offer__navbar">

        <div class="offer__navbar--mobile">
            <Button
                class="filter__button"
                button-style=""
                button-size="normal"
                button-text="Filtruj"
                style="cursor: pointer"
                @click="showFilters"
            />
        </div>

        <ul
            class="offer__navbar-list"
            :class="{ 'offer__navbar-list--mobile': filters }"
        >
            <li
                v-for="item in navData"
                class="offer__navbar-list-item"
            >
                <Button
                    button-style="primary"
                    button-size="normal"
                    :button-text="item.category"
                />

                <ul
                    v-if="item.types"
                    class="offer__navbar-sub-list"
                >
                    <li
                        v-for="subitem in item.types"
                        :key="subitem.text"
                        class="offer__navbar-sub-list-item"
                    >

                        <Button
                            button-style="shop-navbar"
                            button-size="normal"
                            :button-text="subitem.text"
                            @click="navButtonClicked(subitem.type, subitem.text)"
                        />
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
import {handleWith} from "@/mixins/globalMixins";
import {navData} from '@/data/data'
export default {
    name: 'offer nav',
    mixins: [handleWith],
    data() {
        return {
            navData,
            category: '',
            filters: false,
        }
    },
    methods: {
        navButtonClicked(subtype, category) {
            this.category = category
            this.$emit('clicked', subtype, category)
            this.showFilters()
            window.scrollTo(0, 0)
        },
        showFilters() {
            this.filters = !this.filters
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'

.filter__button
    display: none

.offer__navbar
    position: relative
    width: 17vw
    margin-top: 20px

    &-list
        height: 100%
        display: flex
        flex-direction: column
        padding: 0 0 0 60px

        &-item
            margin: 15px 0

            &:nth-child(1)
                margin: 0 0 15px 0

    &-sub-list-item
        padding: 10px 0

</style>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'
@media screen and (min-width: 320px) and (max-width: 980px)
    .filter__button
        display: block
        text-transform: uppercase
        letter-spacing: 1.5px
        padding: 10px 25px
        width: 100%
        border-top: 1px solid $color--light-accent-gray
        border-bottom: 1px solid $color--light-accent-gray
        margin: 0 0 50px 0

    .offer__navbar
        width: 100%
        padding: 0
        transition: all .4s ease

        &-list
            padding: 0
            display: none

            &--mobile
                display: flex
                margin: 0 auto

            &-item
                text-align: center

                button
                    text-transform: uppercase

        &-sub-list
            text-align: center

            &-item
                button
                    text-transform: uppercase
</style>
