{%- set _mod_docs_content_type = "PROCEDURE" %}
# Completing the installation {id="abi-oda-complete-install_{{ context }}"}

After the cluster is installed and initialized, the {{ ai_full }} indicates that the installation is finished. The {{ ai_full }} provides the console URL, the `kubeadmin` username and password, and the `kubeconfig` file. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Make a copy of the `kubeadmin` username and password.
1.  Download the `kubeconfig` file and copy it to the auth directory under your working directory by running the following commands:
    ```terminal
    $ mkdir -p <working_directory>/auth
    ```
    ```terminal
    $ cp kubeconfig <working_directory>/auth
    ```

    :::note

    The `kubeconfig` file is available for download for 20 days after completing the installation.
    
    :::

1.  Add the `kubeconfig` file to your environment by running the following command:
    ```terminal
    $ export KUBECONFIG=<working_directory>/auth/kubeconfig
    ```
1.  Log in with the {{ oc_first }} by running the following command:
    ```terminal
    $ oc login -u kubeadmin -p <password>
    ```

    Replace `<password>` with the password of the `kubeadmin` user.
1.  Click the web console URL or click ***Launch OpenShift Console*** to open the console.
1.  Enter the `kubeadmin` username and password. Follow the instructions in the {{ product_title }} console to configure an identity provider and configure alert receivers.