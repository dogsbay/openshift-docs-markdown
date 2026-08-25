{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ odo_title }} on Linux on {{ ibm_z_title }} and {{ ibm_linuxone_title }} {id="installing-odo-on-linux-on-ibm-z_{{ context }}"}

## Binary installation {id="_binary_installation"}

**Procedure**

1.  Obtain the binary:
    ```terminal
    # curl -L https://mirror.openshift.com/pub/openshift-v4/clients/odo/latest/odo-linux-s390x -o /usr/local/bin/odo
    ```
1.  Change the permissions on the file:
    ```terminal
    # chmod +x /usr/local/bin/odo
    ```

## Tarball installation {id="_tarball_installation"}

**Procedure**

1.  Obtain the tarball:
    ```terminal
    # sh -c 'curl -L https://mirror.openshift.com/pub/openshift-v4/clients/odo/latest/odo-linux-s390x.tar.gz | gzip -d > /usr/local/bin/odo'
    ```
1.  Change the permissions on the file:
    ```terminal
    # chmod +x /usr/local/bin/odo
    ```