{%- set _mod_docs_content_type = "CONCEPT" %}
# Overriding KServe configuration {id="microshift-rhoai-override-kserve-config_{{ context }}"}

You can override KServe settings to customize your model-serving environment.  {._abstract}

Follow the general steps for your operating system.


Option 1

:   1.  Make a copy of the existing `inferenceservice-config` config map file in the `redhat-ods-applications` namespace.
1.  Edit the settings you want to change.
1.  Overwrite the existing `ConfigMap` object.
1.  Restart KServe by either deleting the pod or scaling the `Deployment` pod parameter down to `0` and then back up to `1`.

Option 2

:   1.  Copy the `/usr/lib/microshift/manifests.d/010-microshift-ai-model-serving-kserve/inferenceservice-config-microshift-patch.yaml` config map file.
1.  Edit the settings you want to change.
1.  Apply the `ConfigMap` object.
1.  Restart KServe by either deleting the pod or scaling the `Deployment` pod parameter down to `0` and then back up to `1`.

For {{ op_system_ostree }} and {{ op_system_image }} systems

:   1.  Create a new manifest with the `ConfigMap` file, based on either the `/usr/lib/microshift/manifests.d/010-microshift-ai-model-serving-kserve/inferenceservice-config-microshift-patch.yaml` or `inferenceservice-config` file, in the `redhat-ods-applications` namespace.
1.  Place the new manifest in the `/usr/lib/microshift/manifests.d/` directory. Staring with prefix `011` is recommended so that your manifest is applied after the `/usr/lib/microshift/manifests.d/010-microshift-ai-model-serving-kserve/` directory contents.