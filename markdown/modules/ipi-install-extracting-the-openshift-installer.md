{%- set _mod_docs_content_type = "PROCEDURE" %}
# Extracting the {{ product_title }} installer {id="extracting-the-openshift-installer_{{ context }}"}

Extract the {{ product_title }} installer after retrieving it to prepare for the installation of the cluster. {._abstract}

**Procedure**

1.  Set the environment variables:
    ```terminal
    $ export cmd=openshift-baremetal-install
    ```
    ```terminal
    $ export pullsecret_file=~/pull-secret.txt
    ```
    ```terminal
    $ export extract_dir=$(pwd)
    ```
1.  Get the `oc` binary:
    ```terminal
    $ curl -s https://mirror.openshift.com/pub/openshift-v4/clients/ocp/$VERSION/openshift-client-linux.tar.gz | tar zxvf - oc
    ```
1.  Extract the installer:
    ```terminal
    $ sudo cp oc /usr/local/bin
    ```
    ```terminal
    $ oc adm release extract --registry-config "${pullsecret_file}" --command=$cmd --to "${extract_dir}" ${RELEASE_IMAGE}
    ```
    ```terminal
    $ sudo cp openshift-baremetal-install /usr/local/bin
    ```