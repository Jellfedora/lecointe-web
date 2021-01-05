import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Scroll from "react-scroll";

var scroll = Scroll.animateScroll;

class Legal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    scroll.scrollToTop();
    document.title = "Lecointe Web | Mentions Légales";
  }

  render() {
    return (
      <div className="legal">
        <h1>Mentions Légales</h1>
        <div>
          <h2>1. Présentation du site.</h2>
          <p>
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour
            la confiance dans l'économie numérique, il est précisé aux
            utilisateurs du site{" "}
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>{" "}
            l'identité des différents intervenants dans le cadre de sa
            réalisation et de son suivi :
          </p>
          <span>
            <h3>Propriétaire:</h3> Lecointe Julien - 204, Grand Rue 17700 Saint
            Mard
          </span>
          <span>
            <h3>Créateur:</h3> Lecointe Julien
          </span>
          <span>
            <h3>Responsable publication / Webmaster:</h3> Lecointe Julien
          </span>
          <span>
            <h3>Hébergeur:</h3> Lecointe julien - 204, Grand Rue 17700 Saint
            Mard
          </span>
        </div>
        <div>
          <h2>
            2. Conditions générales d'utilisation du site et des services
            proposés.
          </h2>
          <p>
            L'utilisation du site
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>
            implique l'acceptation pleine et entière des conditions générales
            d'utilisation ci-après décrites. Ces conditions d'utilisation sont
            susceptibles d'être modifiées ou complétées à tout moment, les
            utilisateurs du site{" "}
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>{" "}
            sont donc invités à les consulter de manière régulière.
          </p>
          <p>
            Ce site est normalement accessible à tout moment aux utilisateurs.
            Une interruption pour raison de maintenance technique peut être
            toutefois décidée par{" "}
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>{" "}
            qui s'efforcera alors de communiquer préalablement aux utilisateurs
            les dates et heures de l'intervention.
          </p>
          <p>
            Le site{" "}
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>{" "}
            est mis à jour régulièrement par Julien Lecointe. De la même façon,
            les mentions légales peuvent être modifiées à tout moment : elles
            s'imposent néanmoins à l'utilisateur qui est invité à s'y référer le
            plus souvent possible afin d'en prendre connaissance.
          </p>
        </div>
        <div>
          <h2>3. Description des services fournis.</h2>
          <p>
            Le site{" "}
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>{" "}
            a pour objet de fournir une information concernant l'ensemble des
            activités de la société.
          </p>
          <p>
            Julien Lecointe s'efforce de fournir sur le site
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>{" "}
            des informations aussi précises que possible. Toutefois, il ne
            pourra être tenu responsable des omissions, des inexactitudes et des
            carences dans la mise à jour, qu'elles soient de son fait ou du fait
            des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p>
            Tous les informations indiquées sur le site
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>{" "}
            sont données à titre indicatif, et sont susceptibles d'évoluer. Par
            ailleurs, les renseignements figurant sur le site{" "}
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>{" "}
            ne sont pas exhaustifs. Ils sont donnés sous réserve de
            modifications ayant été apportées depuis leur mise en ligne.
          </p>
        </div>
        <div>
          <h2>4. Limitations contractuelles sur les données techniques.</h2>
          <p>Le site utilise la technologie JavaScript.</p>
          <p>
            Le site Internet ne pourra être tenu responsable de dommages
            matériels liés à l'utilisation du site. De plus, l'utilisateur du
            site s'engage à accéder au site en utilisant un matériel récent, ne
            contenant pas de virus et avec un navigateur de dernière génération
            mis-à-jour.
          </p>
        </div>
        <div>
          <h2>5. Propriété intellectuelle et contrefaçons.</h2>
          <p>
            Julien Lecointe est propriétaire des droits de propriété
            intellectuelle ou détient les droits d'usage sur tous les éléments
            accessibles sur le site, notamment les textes, images, graphismes,
            logo, icônes, sons, logiciels.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable de : Julien Lecointe.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l'un quelconque des
            éléments qu'il contient sera considérée comme constitutive d'une
            contrefaçon et poursuivie conformément aux dispositions des articles
            L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
        </div>
        <div>
          <h2>6. Limitations de responsabilité.</h2>
          <p>
            Julien Lecointe ne pourra être tenu responsable des dommages directs
            et indirects causés au matériel de l'utilisateur, lors de l'accès au
            site{" "}
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>
            , et résultant soit de l'utilisation d'un matériel ne répondant pas
            aux spécifications indiquées au point 4, soit de l'apparition d'un
            bug ou d'une incompatibilité
          </p>
          <p>
            Julien Lecointe ne pourra également être tenu responsable des
            dommages indirects (tels par exemple qu'une perte de marché ou perte
            d'une chance) consécutifs à l'utilisation du site
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>
            .
          </p>
          <p>
            Des espaces interactifs (possibilité de poser des questions dans
            l'espace contact) sont ou vont être à la disposition des
            utilisateurs. Julien Lecointe se réserve le droit de supprimer, sans
            mise en demeure préalable, tout contenu déposé dans cet espace qui
            contreviendrait à la législation applicable en France, en
            particulier aux dispositions relatives à la protection des données.
            Le cas échéant, Julien Lecointe se réserve également la possibilité
            de mettre en cause la responsabilité civile et/ou pénale de
            l'utilisateur, notamment en cas de message à caractère raciste,
            injurieux, diffamant, ou pornographique, quel que soit le support
            utilisé (texte, photographie…).
          </p>
        </div>
        <div>
          <h2>7. Gestion des données personnelles.</h2>
          <p>
            En France, les données personnelles sont notamment protégées par la
            loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
            l'article L. 226-13 du Code pénal et la Directive Européenne du 24
            octobre 1995.
          </p>
          <p>
            Aucune information personnelle de l'utilisateur du site
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>{" "}
            n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée
            ou vendue sur un support quelconque à des tiers. Seule l'hypothèse
            du rachat de Julien Lecointe et de ses droits permettrait la
            transmission des dites informations à l'éventuel acquéreur qui
            serait à son tour tenu de la même obligation de conservation . et de
            modification des données vis à vis de l'utilisateur du site{" "}
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>
            .
          </p>
          <p>
            Le site n'est pas déclaré à la CNIL car il ne recueille pas
            d'informations personnelles.
          </p>
        </div>
        <div>
          <h2>8. Cookies.</h2>
          <p>
            La navigation sur le site{" "}
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>{" "}
            est susceptible de provoquer l'installation de cookie(s) sur
            l'ordinateur de l'utilisateur. Un cookie est un fichier de petite
            taille, qui ne permet pas l'identification de l'utilisateur, mais
            qui enregistre des informations relatives à la navigation d'un
            ordinateur sur un site. Les données ainsi obtenues visent à
            faciliter la navigation ultérieure sur le site, et ont également
            vocation à permettre diverses mesures de fréquentation.
          </p>
          <p>
            Cookies de sessions présents sur ce site ={">"} ga: Cookies propres
            à Google Analytics (statistiques)
          </p>
        </div>
        <div>
          <h2>9. Droit applicable et attribution de juridiction.</h2>
          <p>
            Tout litige en relation avec l'utilisation du site
            <a href="https://julien-lecointe.hopto.org">
              {" "}
              julien-lecointe.hopto.org{" "}
            </a>{" "}
            est soumis aux tribunaux francais compétents statuant selon le droit
            français.
          </p>
        </div>
        <div>
          <h2>10. Les principales lois concernées.</h2>
          <p>
            Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n°
            2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et
            aux libertés.
          </p>
          <p>
            Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie
            numérique.
          </p>
        </div>
        <div>
          <h2>11. Lexique.</h2>
          <p>
            Utilisateur : Internaute se connectant, utilisant le site susnommé.
          </p>
          <p>
            Informations personnelles : « les informations qui permettent, sous
            quelque forme que ce soit, directement ou non, l'identification des
            personnes physiques auxquelles elles s'appliquent » (article 4 de la
            loi n° 78-17 du 6 janvier 1978).
          </p>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Legal));
