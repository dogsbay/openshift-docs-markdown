{%- set _mod_docs_content_type = "CONCEPT" %}
# Service Mesh Operators overview {id="ossm-installation-activities_{{ context }}"}

{{ SMProductName }} requires the use of the {{ SMProductName }} Operator which allows you to connect, secure, control, and observe the microservices that comprise your applications. You can also install other Operators to enhance your service mesh experience.


:::warning

Do not install Community versions of the Operators. Community Operators are not supported.

:::


The following Operator is required:


{{ SMProductName }} Operator
:   Allows you to connect, secure, control, and observe the microservices that comprise your applications. It also defines and monitors the `ServiceMeshControlPlane` resources that manage the deployment, updating, and deletion of the {{ SMProductShortName }} components. It is based on the open source [Istio](https://istio.io/) project.

The following Operators are optional:


{{ KialiProduct }}
:   Provides observability for your service mesh. You can view configurations, monitor traffic, and analyze traces in a single console. It is based on the open source [Kiali](https://www.kiali.io/) project.

{{ TempoName }}
:   Provides distributed tracing to monitor and troubleshoot transactions in complex distributed systems. It is based on the open source [Grafana Tempo](https://grafana.com/oss/tempo/) project.

The following optional Operators are deprecated:


:::important

Starting with {{ SMProductName }} 2.5, {{ JaegerName }} and {{ es_op }} are deprecated and will be removed in a future release. Red&#160;Hat will provide bug fixes and support for these features during the current release lifecycle, but these features will no longer receive enhancements and will be removed. As an alternative to {{ JaegerName }}, you can use {{ TempoName }} instead.

:::



{{ JaegerName }}
:   Provides distributed tracing to monitor and troubleshoot transactions in complex distributed systems. It is based on the open source [Jaeger](https://www.jaegertracing.io/) project.

{{ es_op }}
:   Provides database storage for tracing and logging with the {{ JaegerShortName }}. It is based on the open source [Elasticsearch](https://www.elastic.co/) project.