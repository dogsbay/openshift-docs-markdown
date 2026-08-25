{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ odo_title }} on Linux on {{ ibm_power_title }} {id="installing-odo-on-linux-on-ibm-power_{{ context }}"}

## Binary installation {id="installing-odo-on-linux-on-ibm-power-binary_{{ context }}"}

**Procedure**

1.  Obtain the binary:
    ```terminal
    # curl -L https://mirror.openshift.com/pub/openshift-v4/clients/odo/latest/odo-linux-ppc64le -o /usr/local/bin/odo
    ```
1.  Change the permissions on the file:
    ```terminal
    # chmod +x /usr/local/bin/odo
    ```

## Tarball installation {id="installing-odo-on-linux-on-ibm-power-tarball_{{ context }}"}

**Procedure**

1.  Obtain the tarball:
    ```terminal
    # sh -c 'curl -L https://mirror.openshift.com/pub/openshift-v4/clients/odo/latest/odo-linux-ppc64le.tar.gz | gzip -d > /usr/local/bin/odo'
    ```
1.  Change the permissions on the file:
    ```terminal
    # chmod +x /usr/local/bin/odo
    ```