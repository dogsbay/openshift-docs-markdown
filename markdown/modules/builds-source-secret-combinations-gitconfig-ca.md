{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a secret that combines a .gitconfig file and CA certificate {id="builds-source-secret-combinations-gitconfig-ca_{{ context }}"}

You can combine the different methods for creating source clone secrets for your specific needs, such as a secret that combines a `.gitconfig` file and certificate authority (CA) certificate.

**Prerequisites**

*   A `.gitconfig` file
*   CA certificate

**Procedure**

*   To create a secret that combines a `.gitconfig` file and CA certificate, enter the following command:
    ```terminal
    $ oc create secret generic <secret_name> \
        --from-file=ca.crt=<path/to/certificate> \
        --from-file=<path/to/.gitconfig>
    ```