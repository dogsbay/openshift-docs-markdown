{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reinstalling the {{ product_title }} cluster {id="restarting-installation_{{ context }}"}

If you are unable to debug and resolve issues in the failed {{ product_title }} installation, consider installing a new {{ product_title }} cluster. Before starting the installation process again, you must complete thorough cleanup. {._abstract}

For a user-provisioned infrastructure installation, you must manually destroy the cluster and delete all associated resources. The following procedure is for an installer-provisioned infrastructure installation.

**Procedure**

1.  Destroy the cluster and remove all the resources associated with the cluster, including the hidden installer state files in the installation directory:
    ```terminal
    $ ./openshift-install destroy cluster --dir <installation_directory>
    ```

    Where `<installation_directory>` is the directory you specified when you ran `./openshift-install create cluster`. This directory contains the {{ product_title }} definition files that the installation program creates.
1.  Before reinstalling the cluster, delete the installation directory by running a command similar to the following command:
    ```terminal
    $ rm -rf <installation_directory>
    ```
1.  Follow the procedure for installing a new {{ product_title }} cluster.