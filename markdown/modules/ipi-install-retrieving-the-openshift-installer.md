{%- set _mod_docs_content_type = "PROCEDURE" %}
# Retrieving the {{ product_title }} installer {id="retrieving-the-openshift-installer_{{ context }}"}

Use the `stable-4.x` version of the installation program and your selected architecture to deploy the generally available stable version of {{ product_title }}. {._abstract}

**Procedure**

*   Retrieve the installation program by running one of the following commands:
    ```terminal {minja}
    $ export VERSION=stable-{{ product_version }}
    ```
    ```terminal
    $ export RELEASE_ARCH=<architecture>
    ```
    ```terminal
    $ export RELEASE_IMAGE=$(curl -s https://mirror.openshift.com/pub/openshift-v4/$RELEASE_ARCH/clients/ocp/$VERSION/release.txt | grep 'Pull From: quay.io' | awk -F ' ' '{print $3}')
    ```