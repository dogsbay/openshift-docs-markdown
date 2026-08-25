{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install and enable {{ microshift_short }} Observability {id="microshift-otel-install_{{ context }}"}

You can install {{ microshift_short }} Observability at any time, including during the initial {{ microshift_short }} installation. Observability collects and transmits system data for monitoring and analysis, such as performance and usage metrics and error reporting. {._abstract}

**Procedure**

1.  Install the `microshift-observability` RPM by entering the following command:
    ```terminal
    $ sudo dnf install microshift-observability
    ```
1.  Enable the `microshift-observability` system service by entering the following command:
    ```terminal
    $ sudo systemctl enable microshift-observability
    ```
1.  Start the `microshift-observability` system service by entering the following command:
    ```terminal
    $ sudo systemctl start microshift-observability
    ```
1.  Restart {{ microshift_short }} after the initial installation.
    ```terminal
    $ sudo systemctl restart microshift-observability
    ```

    The installation is successful if there is no output after you start the `microshift-observability` RPM.