import FormItem from "../componentes/controls/FormItem";
import { Content, Header, Wrapper } from "../componentes/layout";

export default function Profile() {
	return (
		<Wrapper>
			<Header title="Perfil" showBack={true} />
			<Content>
				<FormItem laber="Correo electrónico" />
				<FormItem laber="Nombre completo" />
				<FormItem laber="Teléfono" />
			</Content>
		</Wrapper>
	);
}
