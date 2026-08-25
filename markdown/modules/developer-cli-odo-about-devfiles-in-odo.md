{%- set _mod_docs_content_type = "CONCEPT" %}
# About the devfile in {{ odo_title }} {id="about-the-devfile-in-odo"}

The devfile is a portable file that describes your development environment.
With the devfile, you can define a portable developmental environment without the need for reconfiguration.

With the devfile, you can describe your development environment, such as the source code, IDE tools, application runtimes, and predefined commands. To learn more about the devfile, see [the devfile documentation](https://redhat-developer.github.io/devfile/).

With `{{ odo_title }}`, you can create components from the devfiles. When creating a component by using a devfile, `{{ odo_title }}` transforms the devfile into a workspace consisting of multiple containers that run on {{ product_title }}, Kubernetes, or Docker.
`{{ odo_title }}` automatically uses the default devfile registry but users can add their own registries.