## Description

This is a shopify theme based on Dawn which adds functionality to use products as color options

The functionality is based on a mutual work of a metafield "Collection For Option Grouping" (custom.collection_for_option_grouping) and a
newly created collection.

## Usage

The products which are supposed to take roles of the options are assigned to the same Collection and the collection's handle is inputted to the
"custom.collection_for_option_grouping" metafield of these products.

## Approach

The decision of using both collection and metafield rather than a single metafield is related to the liquid limitations of outputting the products. This method decreases the time for liquid execution as we already know which collection we're using and don't have to query though multiple products.

## Liquid

We're creating a new snippet collection-variant-picker.liquid which includes a custom element and a fieldset rendering our input options. As we already know which collection will be used we are outputting and input for each product with a value of it's handle.

## Javascript

In the custom element we assign a "change" event to all inputs. When we select different option (product) we execute Sections API request with a new product's handle and populate the content of the new main-product section.

## Final

The final result can be checked with this preview link: https://checkout-validation-store-nikita.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJak5qYUdWamEyOTFkQzEyWVd4cFpHRjBhVzl1TFhOMGIzSmxMVzVwYTJsMFlTNXRlWE5vYjNCcFpua3VZMjl0QmpvR1JWUT0iLCJleHAiOiIyMDI0LTA4LTE2VDE0OjAyOjM0LjU0MloiLCJwdXIiOiJwZXJtYW5lbnRfcGFzc3dvcmRfYnlwYXNzIn19--689bbbdefd70ddb5128b185a6c845dc61c29cca2&_fd=0&_sc=1&key=b08c90a743efa8fb530c29469a397082b4478929c1a5613476631ac576ff3d72&preview_theme_id=165997019170

Link to the product assigned to the collection and metafield: https://checkout-validation-store-nikita.myshopify.com/products/the-collection-snowboard-hydrogen
