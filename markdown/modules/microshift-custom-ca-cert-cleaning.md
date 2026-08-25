{%- set _mod_docs_content_type = "PROCEDURE" %}
# Cleaning up and recreating the custom certificates {id="microshift-custom-ca-certificates-cleaning_{{ context }}"}

You can stop the {{ microshift_short }} service, clean up the custom certificates, and re-create the custom certificates, to ensure that your system uses the most recent certificate data. {._abstract}

**Procedure**

1.  Stop the {{ microshift_short }} services and clean up the custom certificates by running the following command:
    ```terminal
    $ sudo microshift-cleanup-data --cert
    ```
    ```terminal title="Example output"
    Stopping MicroShift services
    Removing MicroShift certificates
    MicroShift service was stopped
    Cleanup succeeded
    ```
1.  Restart the {{ microshift_short }} services to recreate the custom certificates by running the following command:
    ```terminal
    $ sudo systemctl start microshift
    ```