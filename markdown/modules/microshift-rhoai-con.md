{%- set _mod_docs_content_type = "CONCEPT" %}
# How {{ rhoai_full }} works in {{ microshift_short }} {id="microshift-rhoai-con_{{ context }}"}

Edge deployments are where data happens and decisions need to be made. You can use {{ rhoai_full }} ({{ rhoai }}) to integrate a fleet of {{ microshift_short }}-driven edge devices into the artificial intelligence and machine learning (AI/ML) operations cycle. {._abstract}

{{ microshift_short }} is compatible with a single-model serving platform based on the KServe component of Kubernetes. KServe is a platform that orchestrates model serving.

{{ rhoai }} is a platform for data scientists and developers of AI/ML applications. First, use {{ rhoai }} in the cloud or data center to develop, train, and test an AI model. Then, run your model in your edge deployments on {{ microshift_short }}.

After you deploy your AI model, application data can be sent to the model, so that the model can make data-driven decisions without a human user. This is an ideal scenario for edge applications where interaction with an administrator is naturally limited.


Implemented with KServe

:   The KServe component includes model-serving runtimes that implement the loading of various types of model servers. These runtimes are configured with custom resources (CRs). KServe custom resource definitions (CRDs) also define the life cycle of the deployment object, storage access, and networking setup.


Specifics of using {{ rhoai }} with {{ microshift_short }}

:   As an edge-optimized Kubernetes deployment, {{ microshift_short }} has the following limitations when using {{ rhoai }}:

    *   AI model serving on {{ microshift_short }} is only available on the x86_64 architecture.
*   A subset of {{ rhoai }} Operator components are supported on {{ microshift_short }}.
*   As a single-node Kubernetes distribution, {{ microshift_short }} does not support multi-model deployments. You must use the single-model serving platform.
*   You must develop the AI models you want to run on the {{ microshift_short }} model-serving platform in the cloud or your data center. Using {{ microshift_short }} as a development platform for AI models is not supported.
*   You must plan for any additional RAM, disk space, and storage configurations required to serve your AI model.
*   Not all model servers support the IPv6 networking protocol. Check each model server’s documentation to verify that your networking configuration is supported.
*   You must secure the exposed model server endpoint, for example, with OAUTH2.
*   `ClusterServingRuntimes` CRDs are not supported by {{ rhoai }}, which means that you must copy the `ServingRuntime` CR shipped within the `microshift-ai-model-serving` RPM to your workload namespace.
*   To administer model serving on {{ microshift_short }}, you must use the CLI. The {{ rhoai }} dashboard is not supported.