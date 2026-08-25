{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the {{ rhoai_full }} RPM {id="microshift-rhoai-install_{{ context }}"}

To use AI models in {{ microshift_short }} deployments, install the {{ rhoai_full }} ({{ rhoai }}) RPM with a new {{ microshift_short }} installation. You can also install the RPM on an existing {{ microshift_short }} instance if you restart the system. {._abstract}


:::note

The `microshift-ai-model-serving` RPM contains manifests that deploy `kserve`, with the raw deployment mode enabled, and `ServingRuntimes` objects in the `redhat-ods-applications` namespace.

:::


{%- set FeatureName = "{{ rhoai_full }}" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

**Prerequisites**

*   The system requirements for installing {{ microshift_short }} have been met.
*   You have root user access to your machine.
*   The {{ oc_first }} is installed.
*   You configured your LVM VG with the capacity needed for the PVs of your workload.
*   You have the RAM and disk space required for your AI model.
*   You configured the required accelerators, hardware, operating system, and {{ microshift_short }} to provide the resources your model needs.
*   Your AI model is ready to use.

**Procedure**

1.  Install the {{ microshift_short }} AI-model-serving RPM package by running the following command:
    ```terminal
    $ sudo dnf install microshift-ai-model-serving
    ```
1.  As a root user, restart the {{ microshift_short }} service by entering the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```
1.  Optional: Install the release information package by running the following command:
    ```terminal
    $ sudo dnf install microshift-ai-model-serving-release-info
    ```

    :::note

    The `microshift-ai-model-serving-release-info` RPM contains a JSON file with image references useful for offline procedures or deploying a copy of a `ServingRuntime` custom resource (CR) to your namespace during a bootc image build.
    
    :::


**Verification**

*   Verify that the `kserve` pod is running in the `redhat-ods-applications` namespace by entering the following command:
    ```terminal
    $ oc get pods -n redhat-ods-applications
    ```
    ```text title="Example output"
    NAME                                        READY   STATUS    RESTARTS   AGE
    kserve-controller-manager-7fc9fc688-kttmm   1/1     Running   0          1h
    ```

**Next steps**

*   Create a namespace for your AI model.
*   Package your model into an OCI image.
*   Configure a model-serving runtime.
*   Verify that your model is ready for inferencing.
*   Make requests against the model server.