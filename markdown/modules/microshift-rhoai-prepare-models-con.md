{%- set _mod_docs_content_type = "CONCEPT" %}
# Prepare and package AI models for MicroShift {id="microshift-rhoai-prepare-models-con_{{ context }}"}

Before deploying an AI model on MicroShift, create a dedicated namespace for your model resources and package the model into an OCI image using the ModelCar format. {._abstract}

A namespace provides resource isolation and access control for your AI model workloads. The ModelCar format packages your AI model as a standard container image, which is the tested and supported storage method for MicroShift edge deployments. Using a container image lets you embed the model alongside your other workloads, making it suitable for offline and air-gapped environments.