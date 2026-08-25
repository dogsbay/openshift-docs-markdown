{%- set _mod_docs_content_type = "CONCEPT" %}
# What is {{ product_title }}? {id="security-understanding-openshift_{{ context }}"}

You can use {{ product_title }} to automate the deployment, operation, and management of containerized applications. {{ product_title }} uses Kubernetes as its orchestration engine, enhanced with Red Hat security, support, and enterprise features. {._abstract}

Automating how containerized applications are deployed, run, and managed is the job of a platform such as {{ product_title }}. At its core, {{ product_title }} relies on the Kubernetes project to provide the engine for orchestrating containers across many nodes in scalable data centers.

Kubernetes is a project, which can run using different operating systems and add-on components that offer no guarantees of supportability from the project. As a result, the security of different Kubernetes platforms can vary.

{{ product_title }} is designed to lock down Kubernetes security and integrate the platform with a variety of extended components. To do this, {{ product_title }} draws on the extensive Red Hat ecosystem of open source technologies that include the operating systems, authentication, storage, networking, development tools, base container images, and many other components.

{{ product_title }} can use Red Hat’s experience in uncovering and rapidly deploying fixes for vulnerabilities in the platform itself and the containerized applications running on the platform. Red Hat’s experience also extends to efficiently integrating new components with {{ product_title }} as they become available and adapting technologies to individual customer needs.