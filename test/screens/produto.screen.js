class NewProductScreen {
    get enterStoreProduct() {
        return $('id=com.woocommerce.android:id/products')
    }

    get addProduct() {
        return $('id=com.woocommerce.android:id/addProductButton.click')
    }

    async SimplePhysicalProduct() {
        await $('android.view.ViewGroup').click()
        return $('New Product')
    }

    get addProductImage(){
        return $('id=com.woocommerce.android:id/addImageContainer')
    }

    async SelectionImage(){
        await $('id=com.woocommerce.android:id/textWPMediaLibrary').click()
        await $('id=com.woocommerce.android:id/toolbar_main').click()
        await $('id=com.woocommerce.android:id/image_thumbnail').click()
        await $('id=com.woocommerce.android:id/mnu_confirm_selection').click()
        await $('id=com.woocommerce.android:id/productImage').click()
        await $('id=com.woocommerce.android:id/toolbar').click()
        return $('New Product')

    }

    get Description() {
        await ('id=com.woocommerce.android:id/toolbar').click()
        await ('id=com.woocommerce.android:id/visualEditor').click()
        await ('android.widget.ImageButton').click()
        return $('New Product')
    }

    get addPrice() {
        await ('id=com.woocommerce.android:id/spinner_edit_text').click()
        await ('android.widget.ImageButton').click()
        return $('New Product')
    }

    get Inventory(){
        await ('android.view.ViewGroup').click()
        await ('id=com.woocommerce.android:id/edit_text').click()
        await ('android.widget.ImageButton').click()
        await ('id=com.woocommerce.android:id/menu_publish').click()
        await ('id=com.woocommerce.android:id/toolbar').click()
        await ('id=com.woocommerce.android:id/editText').click()
        await ('id=com.woocommerce.android:id/menu_save').click()
        return $('Products')
    }

}

module.exports = new NewProductScreen()
